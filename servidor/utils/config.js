 const redis = {
    host: process.env.REDIS_HOST  || "localhost",
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
    url: process.env.REDIS_URL || "redis://:@localhost:6379",
};
  
module.exports = redis;