
import { Dropdown } from "./dropdown"


export function Sidebar() {



    return (
        <>

            <div className='container-fluid'>

                <div className='row'>
                    <div className="col-auto min-vh-100 bg-secondary">
                        {/* <DropVal inputValue={inputValue} onInputChange={handleInputChange} /> */}
                        <Dropdown sideItem="Dropdown 2" />
                        <Dropdown sideItem="Start Date" />
                        <Dropdown sideItem="End date" />

                    </div>
                </div>

            </div>

        </>
    );
}
