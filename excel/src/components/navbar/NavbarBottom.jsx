import React from 'react'
import { Clipboard } from "lucide-react";
import { Scissors } from "lucide-react";
import { Copy } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { ClipboardPaste } from "lucide-react";


const NavbarBottom = () => {
    return (
        <div>
            {/* clipboard */}
            <div className='clipboard'>
                <div>
                    <ClipboardPaste />
                </div>
                <div>
                    <Copy />
                    <Scissors />
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default NavbarBottom