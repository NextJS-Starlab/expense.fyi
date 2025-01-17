import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';

type Summary = { title: String; data: any; icon?: any };

export default function SummaryCard({ title, data, icon: Icon }: Summary) {
	return (
		<Card className="relative">
			<CardHeader className="pb-0">
				<CardTitle className="text-xs font-semibold uppercase text-muted-foreground">{title}</CardTitle>
				{Icon ? <Icon className="absolute right-3 top-1 h-4 w-4" /> : null}
			</CardHeader>
			<CardContent>
				<p
					title={data}
					className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-extrabold tabular-nums text-foreground"
				>
					{data}
				</p>
			</CardContent>
		</Card>
	);
}
