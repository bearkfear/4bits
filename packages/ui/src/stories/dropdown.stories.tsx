import type { Meta } from "@storybook/react";
import {
	DollarSign,
	Ellipsis,
	Group,
	LucideAirplay,
	PowerOffIcon,
	Rss,
} from "lucide-react";
import { Button, Dropdown } from "../index";

export default {
	title: "Dropdown",
} satisfies Meta<typeof Dropdown.Root>;

export const DropdownDefault = () => {
	return (
		<Dropdown.Root modal={false}>
			<Dropdown.Trigger>
				<Button className="space-x-3">
					<Ellipsis size={18} />
					<span>Settings</span>
				</Button>
			</Dropdown.Trigger>
			<Dropdown.Content className="w-50">
				<div className="space-y-1">
					<Dropdown.Label className="flex space-x-3 items-center pb-0">
						<span>Settings</span>
					</Dropdown.Label>
					<Dropdown.Label className="text-gray-11 dark:text-graydark-11 text-xs font-normal pt-0">
						Choose an option and setup it
					</Dropdown.Label>
				</div>

				<Dropdown.Separator />

				<Dropdown.Item className="space-x-3">
					<LucideAirplay size={18} />
					<span>Air play</span>
				</Dropdown.Item>
				<Dropdown.Item className="space-x-3">
					<DollarSign size={18} />
					<span>Billing</span>
				</Dropdown.Item>
				<Dropdown.Item className="space-x-3">
					<Group size={18} />
					<span>Team</span>
				</Dropdown.Item>
				<Dropdown.Item className="space-x-3">
					<Rss size={18} />
					<span>Subscribe</span>
				</Dropdown.Item>

				<Dropdown.Separator />
				<Dropdown.Item className="space-x-3">
					<PowerOffIcon size={18} />
					<span>Logout</span>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	);
};
