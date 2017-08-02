import test from 'ava';
import m from './';

test(t => {
	t.is(m(0, '0'), '');
	t.is(m(2, '0'), '00');
	t.is(m(4, '0'), '0000');
	t.is(m(2, 1), '11');
	t.is(m(-1, '1'), '');
	t.is(m(-5, '1'), '');
	t.is(m(2, 'hello'), 'hellohello');
});
