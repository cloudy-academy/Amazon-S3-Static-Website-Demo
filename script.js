function updateDateTime() {
  const now = new Date();
  const options = {
    dateStyle: 'full',
    timeStyle: 'medium'
  };
  const formatted = now.toLocaleString('fa-IR', options);
  document.getElementById('datetime').textContent = `تاریخ و زمان: ${formatted}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
