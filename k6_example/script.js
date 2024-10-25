import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  thresholds: {
    http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }],
    http_req_duration: [{ threshold: 'p(95)<1000', abortOnFail: false }],
  },
  scenarios: {
    desired_load: {
      executor: 'ramping-vus',
      stages: [
        { duration: '20s', target: 300 },
        { duration: '30s', target: 300 },
      ],
    },
    breaking_point: {
      executor: 'ramping-vus',
      startTime: '50s',
      stages: [
        { duration: '3s', target: 20 },
        { duration: '7s', target: 20 },
        { duration: '7s', target: 40 },
        { duration: '7s', target: 80 },
        { duration: '7s', target: 160 },
        { duration: '7s', target: 320 },
        { duration: '7s', target: 640 },
        { duration: '7s', target: 1280 },
        { duration: '7s', target: 2560 },
        { duration: '7s', target: 5120 },
      ],
    }
  },
};

export default function() {
  const res = http.get('http://localhost:3000/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
