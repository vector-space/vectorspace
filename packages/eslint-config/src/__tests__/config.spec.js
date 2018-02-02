// Modules
import config from '../config';


describe('eslint-config', () => {
  it('should return an object with plugins', () => {
    expect(config).toHaveProperty('plugins');
  });

  it('should return an object with rules', () => {
    expect(config).toHaveProperty('rules');
  });
});
