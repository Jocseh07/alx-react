import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('should return the correct string when the argument is true', () => {
    const isIndex = true;
    const expectedCopy = 'Holberton School';
    expect(getFooterCopy(isIndex)).toBe(expectedCopy);
  });

  it('should return the correct string when the argument is false', () => {
    const isIndex = false;
    const expectedCopy = 'Holberton School main dashboard';
    expect(getFooterCopy(isIndex)).toBe(expectedCopy);
  });
});

describe('getLatestNotification', () => {
  it('should return the latest notification string', () => {
    const latestNotification = getLatestNotification();
    const expectedString =
      '<strong>Urgent requirement</strong> - complete by EOD';
    expect(typeof latestNotification).toBe('string');
    expect(latestNotification.length).toBeGreaterThan(0);
    expect(latestNotification).toBe(expectedString);
  });
});
