/**
 * Fetches the latest 3 blog posts at build time and injects them into index.html
 * between <!-- POSTS_START --> and <!-- POSTS_END --> markers.
 * Falls back gracefully if the API is unreachable.
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const API_URL = 'https://app.joinsocialcode.com/api/posts';
const HTML_PATH = path.join(__dirname, '../index.html');

function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(str) {
  if (!str) return '';
  return new Date(str).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });
}

function postHTML(post) {
  return `<a href="https://app.joinsocialcode.com/blog/${escHtml(post.slug)}"
          class="group rounded-2xl border p-6 flex flex-col transition-all"
          style="background:#131E2B; border-color:rgba(255,255,255,0.06); text-decoration:none;">
          <p style="font-size:11px; color:#475569; margin-bottom:12px;">${formatDate(post.published_at)}</p>
          <h3 style="font-size:15px; font-weight:800; color:#F7F9FC; line-height:1.35; margin-bottom:10px;">${escHtml(post.title)}</h3>
          <p style="font-size:13px; color:#94a3b8; line-height:1.65; flex:1; font-family:'Work Sans',sans-serif; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${escHtml(post.excerpt)}</p>
          <p style="font-size:12px; font-weight:700; color:#00D9C0; margin-top:16px;">Read →</p>
        </a>`;
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    https.get(API_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    const posts = await fetchPosts();
    const latest = Array.isArray(posts) ? posts.slice(0, 3) : [];

    if (!latest.length) {
      console.log('inject-posts: no posts returned, skipping.');
      return;
    }

    const injected = latest.map(postHTML).join('\n        ');
    let html = fs.readFileSync(HTML_PATH, 'utf8');

    html = html.replace(
      /<!-- POSTS_START -->[\s\S]*?<!-- POSTS_END -->/,
      `<!-- POSTS_START -->\n        ${injected}\n        <!-- POSTS_END -->`
    );

    fs.writeFileSync(HTML_PATH, html);
    console.log(`inject-posts: injected ${latest.length} posts.`);
  } catch (err) {
    console.warn(`inject-posts: failed (${err.message}), skipping.`);
  }
}

main();
