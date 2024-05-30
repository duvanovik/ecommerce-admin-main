'use client';
import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

const SetupPage = () => {
	const onOpen = useStoreModal(state => state.onOpen);
	const isOpen = useStoreModal(state => state.isOpen);

	useEffect(() => {
		console.log("Cloudinary Cloud Name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
		if (!isOpen) onOpen();
	}, [isOpen, onOpen]);

	return null;
};

export default SetupPage;
