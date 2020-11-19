import { PriceShortenerPipe } from './price-shortener.pipe';

describe('PriceShortenerPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceShortenerPipe();
    expect(pipe).toBeTruthy();
  });
});
