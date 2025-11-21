<!-- Add to <head> -->
<script src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js" async></script>

<!-- Add where you want chat -->
<div id="my-chat"></div>

<script>
  const chatkit = document.getElementById('my-chat');
  chatkit.setOptions({
    api: {
      async getClientSecret() {
        // Points to YOUR Render deployment
        const res = await fetch('https://your-app-name.onrender.com/api/chatkit/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const { client_secret } = await res.json();
        return client_secret;
      }
    },
    theme: 'light',
    // Your custom styling here
  });
</script>
