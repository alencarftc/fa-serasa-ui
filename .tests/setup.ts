import '@testing-library/jest-dom/extend-expect';

/*
 * @vitest-environment jsdom
 */
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

afterEach(() => {
	cleanup();
});

expect.extend(matchers);
