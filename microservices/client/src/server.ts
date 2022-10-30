try {
  (async () => {
    const app = (await import('./config/app')).default;
    const port = 3000;
    app.listen(port, () => {
      console.log(`Microservice about clients running in port ${port}`);
    });
  })();
} catch (error) {
  console.log(error);
}
