import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: format Currency', ()=>{
    it('converts cents to dollars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('formats 0 value', ()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('Rounds a decimal value', ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});

