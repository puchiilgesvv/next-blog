/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) { 
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'dbUser',
        mongodb_password: '9ZLWUGz0l2fJcCOX',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-dev'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'dbUser',
      mongodb_password: '9ZLWUGz0l2fJcCOX',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog'
    }
  }
}
