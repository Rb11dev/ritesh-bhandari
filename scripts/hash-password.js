// Usage: node scripts/hash-password.js "your long password"  -> paste output into ADMIN_PASSWORD_HASH
const c=require('crypto'),p=process.argv[2];if(!p||p.length<10){console.error('Provide a password of 10+ characters.');process.exit(1)}
const salt=c.randomBytes(16).toString('hex');console.log('scrypt$'+salt+'$'+c.scryptSync(p,salt,64).toString('hex'));
