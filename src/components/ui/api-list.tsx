'use client';

import { useOrigin } from '@/hooks/use-origin';
import { useParams } from 'next/navigation';
import React from 'react';
import { ApiAlert } from '@/components/ui/api-alert';

interface ApiListProps {
	entityName: string;
	entityIdName: string;
}

const ApiList: React.FC<ApiListProps> = ({ entityName, entityIdName }) => {
	const params = useParams();
	const origin = useOrigin();

	const baseUrl = `${origin}/api/${params.storeId}`;

	return (
		<>
			<ApiAlert
				title="GET"
				varient="public"
				description={`${baseUrl}/${entityName}`}
			/>
			<ApiAlert
				title="GET"
				varient="public"
				description={`${baseUrl}/${entityName}/{${entityIdName}}`}
			/>
			<ApiAlert
				title="POST"
				varient="admin"
				description={`${baseUrl}/${entityName}`}
			/>
			<ApiAlert
				title="PATCH"
				varient="admin"
				description={`${baseUrl}/${entityName}/{${entityIdName}}`}
			/>
			<ApiAlert
				title="DELETE"
				varient="admin"
				description={`${baseUrl}/${entityName}/{${entityIdName}}`}
			/>
		</>
	);
};

export default ApiList;
