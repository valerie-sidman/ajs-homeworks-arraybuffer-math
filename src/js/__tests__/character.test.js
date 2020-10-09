import Magician from '../classMagician';
import Daemon from '../classDaemon';

test('testing attack', () => {
  const magicianHarry = new Magician();
  magicianHarry.attack = 6;
  expect(magicianHarry.attack).toBe(50);
});

test('testing stoned', () => {
  const daemonRon = new Daemon();
  daemonRon.stoned = true;
  daemonRon.attack = 2;
  expect(daemonRon.stoned).toBe(true);
  expect(daemonRon.attack).toBe(85);
});
