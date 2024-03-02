import React from 'react'
import {UserDashboardTabs} from "../Layouts/UserDashboardTabs"
import Therapists from "../Layouts/Therapists"
type Props = {}


export default function UserDashboardPage({}: Props) {
  return (
    <div>
<UserDashboardTabs/>
<Therapists/>
    </div>
  )
}