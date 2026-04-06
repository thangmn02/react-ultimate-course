import { Outlet, useNavigate } from "react-router"

function User() {
  const navigate = useNavigate();
  // const [tab, setTab] = React.useState('account')

  // function goToTab(tabName: string) {
  //   setTab(tabName)
  // }


  return (
    <div>
      First Name: Tony <br />
      Last Name: Nguyen <br />

      <ul className="flex flex-wrap text-sm font-medium text-center text-body border-b border-default">
        <li className="me-2">
          <div
            // onClick={() => goToTab('account')}
            onClick={() => navigate('/user/account')}
            className="inline-block p-4 rounded-t-base hover:text-heading hover:bg-neutral-secondary-soft"
          >
            Account
          </div>
        </li>
        <li className="me-2">
          <div
            // onClick={() => goToTab('profile')}
            onClick={() => navigate('/user/profile')}
            className="inline-block p-4 rounded-t-base hover:text-heading hover:bg-neutral-secondary-soft"
          >
            Profile
          </div>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>

      {/* <div>
        {tab === 'account' && <Account />}

        {tab === 'profile' && <Profile />}
      </div> */}

    </div>
  )
}

export default User