import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';

import { CategoryClient } from './components/client';
import { CategoryColumn } from './components/columns';

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
	const categories = await prismadb.category.findMany({
		where: { storeId: params.storeId },
		include: {
			billboard: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	const formattedCategories: CategoryColumn[] = categories.map(category => ({
		id: category.id,
		name: category.name,
		billboardLabel: category.billboard.label,
		createdAt: format(category.createdAt, 'MMM do, yyyy'),
	}));

	return (
		<div className="flex-col">
			<div className="felx-1 space-y-4 p-8 pt-6">
				<CategoryClient data={formattedCategories} />
			</div>
		</div>
	);
};

export default CategoriesPage;
