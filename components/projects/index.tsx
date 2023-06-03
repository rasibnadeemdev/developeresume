import data from '@/data';

const Projects = () => {
	const { projects } = data;
	return (
		<div>
			<h2 className="font-semibold text-lg uppercase border-b border-gray-400 mb-2">
				Personal Projects
			</h2>
			<div className="my-3">
				<ul className="pl-4 leading-5 space-y-3 w-[86%]">
					{projects.map(task => (
						<div className="space-x-2 flex" key={task.id}>
							<span>•</span>
							<li
								className="inline-block"
								dangerouslySetInnerHTML={{
									__html: `${task.name}: ${task.desc}`
								}}
							/>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
