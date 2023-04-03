/*
 * @vitest-environment jsdom
 */
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
	cleanup();
});
