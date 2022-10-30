try {
  (async () => {
    const app = (await import('./config/app')).default;
    const port = 3001;
    app.listen(port, () => {
      console.log(`Microservice about products running in port ${port}`);
    });
  })();
} catch (error) {
  console.log(error);
}
