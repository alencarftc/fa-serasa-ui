import { createContext, useEffect, useMemo, useState } from 'react';
import { PropsWithChildren } from '@interfaces/shared';

import { ModalConfigType } from '@components/FeedbackModal';

export interface ModalContextProps {
	configType: ModalConfigType;
	change: (configType: ModalConfigType) => void;
}
export const ModalContext = createContext<ModalContextProps>({
	configType: 'default',
	change: () => {},
});

interface ModalProviderProps extends PropsWithChildren {
	initialConfigType?: ModalConfigType;
}

const ModalProvider = ({
	children,
	initialConfigType = 'default',
}: ModalProviderProps) => {
	const [configType, setConfigType] =
		useState<ModalConfigType>(initialConfigType);

	const change = (type: ModalConfigType) => {
		setConfigType(type);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setConfigType('default');
		}, 3000);

		return () => clearTimeout(timeout);
	}, [configType]);

	const value = useMemo(
		() => ({
			configType,
			change,
		}),
		[configType]
	);

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

export default ModalProvider;
