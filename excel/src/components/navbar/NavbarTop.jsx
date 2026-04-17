import { CornerUpLeft, Save, CornerUpRight, Minus, Square, X, Lightbulb } from 'lucide-react'
import React from 'react'

const NavbarTop = () => {
    return (
        <div className='navbar-top'>
            <div className='navbar-top-belt'>
                {/* left */}
                <div className='navbar-left-top-belt'>
                    <div>
                        <Save size={16} />
                    </div>
                    <div>
                        <CornerUpLeft size={16} />
                    </div>
                    <div>
                        <CornerUpRight size={16} />
                    </div>
                </div>

                {/* right */}
                <div className='navbar-right-top-belt'>
                    <div>
                        <Minus size={16} />
                    </div>
                    <div>
                        <Square size={16} />
                    </div>
                    <div className='close'>
                        <X size={16} />
                    </div>
                </div>
            </div>
            {/* navbar top bottom belt */}
            <div className='navbar-top-banner'>
                <ul>
                    <li>File</li>
                    <li>Home</li>
                    <li>Insert</li>
                    <li>Page Layout</li>
                    <li>Formulas</li>
                    <li>Data</li>
                    <li>Review</li>
                    <li>View</li>
                    <li>Help</li>
                    <li><Lightbulb /></li>
                </ul>
            </div>
        </div>

    )
}

export default NavbarTop