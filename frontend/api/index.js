const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express() 

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:8000', // Ganti dengan URL backend Laravel Anda
    changeOrigin: true,
  })
)
// tes

module.exports = {
  path: '/api',
  handler: app,
}
