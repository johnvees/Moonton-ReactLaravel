import React from "react";
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "@/Layouts/Authenticated/MenuItem";
import { userMenu, othersMenu } from "@/Layouts/Authenticated/MenuList";
import { Link } from "@inertiajs/react";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {/* START: Menu */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {userMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>
                    {/* END: Menu */}

                    {/* START: Others */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {othersMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>
                    {/* END: Others */}

                    {/* START: Subscription details */}
                    {auth.activePlan && (
                        <SubscriptionDetail
                            isPremium={auth.activePlan.name === "Premium"}
                            name={auth.activePlan.name}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                    {/* END: Subscription details */}
                </div>
            </div>
        </aside>
    );
}
