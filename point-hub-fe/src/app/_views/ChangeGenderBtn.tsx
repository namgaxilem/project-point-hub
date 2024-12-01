import { useLang } from '@/contexts';
import LGBTIcon from '@/icons/LGBTIcon';
import StraightIcon from '@/icons/StraightIcon';
import TransFemaleIcon from '@/icons/TransFemaleIcon';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

export default function ChangeGenderBtn() {
  const { lang } = useLang();

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start" className="min-w-[50px]">
        <DropdownTrigger>
          <div className="h-[20px] overflow-hidden text-black dark:text-white flex gap-1 cursor-pointer items-center text-sm md:text-base mx-1 justify-center">
            <span className="hidden md:block">{lang.header.straight}</span>
            <StraightIcon className="h-[18px] w-[18px] fill-white" />
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="settings">
            <div className="h-[20px] overflow-hidden text-black dark:text-white flex gap-3 cursor-pointer">
              <StraightIcon className="h-[20px] w-[20px] fill-white" />
              <span>{lang.header.straight}</span>
            </div>
          </DropdownItem>
          <DropdownItem key="team_settings" isDisabled>
            <div className="h-[20px] overflow-hidden text-black dark:text-white flex gap-3 cursor-pointer">
              <LGBTIcon className="h-[20px] w-[20px] fill-white" />
              <span>{lang.header.lgbt}</span>
            </div>
          </DropdownItem>
          <DropdownItem key="analytics" isDisabled>
            <div className="h-[20px] overflow-hidden text-black dark:text-white flex gap-3 cursor-pointer">
              <TransFemaleIcon className="h-[20px] w-[20px] fill-white" />
              <span>{lang.header.trans}</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
