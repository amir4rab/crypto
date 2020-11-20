import { CurrencySymbolsPipe } from './currency-symbols.pipe';

describe('CurrencySymbolsPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencySymbolsPipe();
    expect(pipe).toBeTruthy();
  });
});
