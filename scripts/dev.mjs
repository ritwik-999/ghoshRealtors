import { spawn } from 'node:child_process';

const child = spawn('npx', ['next', 'dev', '-p', '3000', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  env: { ...process.env, PORT: '3000', HOSTNAME: '0.0.0.0' },
});

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on('SIGINT', () => forwardSignal('SIGINT'));
process.on('SIGTERM', () => forwardSignal('SIGTERM'));

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
