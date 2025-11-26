function createSecretHolder(secret) {
  let _secret = secret;

  return {
    getSecret: function() {
      return _secret;
    },
    setSecret: function(newSecret) {
      _secret = newSecret;
    }
  };
}

// Usage:
const holder = createSecretHolder(5);
console.log(holder.getSecret()); // 5
holder.setSecret(10);
console.log(holder.getSecret()); // 10