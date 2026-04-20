import React from 'react'
import { Clipboard } from "lucide-react";
import { Scissors } from "lucide-react";
import { Copy } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { ClipboardPaste } from "lucide-react";
import { Bold, Italic, Underline } from "lucide-react";
import { Type, PaintBucket } from "lucide-react";
import {
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify
} from "lucide-react";
import { FilePlus, FolderPlus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import { Search } from "lucide-react";
import { Filter } from "lucide-react";
import { Table } from "lucide-react";
import { Puzzle } from "lucide-react";


const NavbarBottom = () => {
    return (
        <div className='navbar-bottom'>
            {/* clipboard */}
            <div className='clipboard'>
                <div className='top'>
                    <div>
                        <ClipboardPaste size={32} />
                        <div><span>Paste</span></div>
                    </div>
                    <div className='child-2'>
                        <div>
                            <Scissors size={16} />
                        </div>
                        <div>
                            <Copy size={16} />
                        </div>
                        <div>
                            <Paintbrush size={16} />
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <span>Clipboard</span>
                </div>
            </div>

            {/* font */}
            <div className='font'>
                <div className='first-row'>
                    <select>
                        <option>Aptos Narrow</option>
                    </select>
                    <select>
                        <option>11</option>
                    </select>
                </div>
                <div className="second-row">
                    <div className='left'>
                        <Bold size={16} />
                        <Italic size={16} />
                        <Underline size={16} />
                    </div>
                    <div className='right'>
                        <Type size={16} />
                        <Type style={{ paddingTop: "2px" }} size={12} />
                    </div>

                </div>
                <div className='third-row'>
                    <div className='left'>
                        <PaintBucket size={18} />
                    </div>
                    <div className='right'>
                        <span style={{ fontWeight: "bold", fontSize: "16px" }}>A</span>
                    </div>
                </div>
                <div className='bottom'>
                    <span>Font</span>
                </div>
            </div>

            {/* aligmment */}
            <div className='alignment'>
                <div>
                    <AlignLeft size={18} />
                    <AlignCenter size={18} />
                    <AlignRight size={18} />
                    <AlignJustify size={18} />
                </div>
                <div className='row'>
                    <AlignLeft size={18} />
                    <AlignCenter size={18} />
                    <AlignRight size={18} />
                    <AlignJustify size={18} />
                </div>
                <div className='row'>
                    <AlignLeft size={18} />
                    <AlignCenter size={18} />
                    <AlignRight size={18} />
                    <AlignJustify size={18} />
                </div>
                <div className='bottom'>
                    <span>Alignment</span>
                </div>
            </div>

            {/* number */}
            <div className='number'>
                <select>
                    <option>General</option>
                </select>
                <div className='row'>
                    <span className='percent'>%</span>
                    <span className='comma'>,</span>
                </div>
                <div className='bottom'>
                    <span>Number</span>
                </div>
            </div>

            {/* styles */}
            <div className='styles'>
                <div className='top'>
                    <div className='row'>
                        <div><Table size={24} /></div>
                        <span>Conditional Formatting</span>
                    </div>
                    <div className='row'>
                        <div><Table size={24} /></div>
                        <span>Format as Table</span>
                    </div>
                    <div className='row'>
                        <div><Table size={24} /></div>
                        <span>Cell styles</span>
                    </div>
                </div>

                <div className='bottom'>
                    <span>Styles</span>
                </div>
            </div>

            {/* cells */}
            <div className='cell'>
                <div><FilePlus size={16} /><span>Insert</span></div>
                <div className='row'><Trash2 size={16} /><span>Delete</span></div>
                <div className='row'><SlidersHorizontal size={16} /><span>Format</span></div>
                <div className='bottom'>
                    <span>Cell</span>
                </div>
            </div>

            {/* editing */}
            <div className='editing'>
                <div className='top'>
                    <div className='col'>
                        <div>
                            <Search size={24} />
                        </div>
                        <div>
                            <span>Search</span>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <Filter size={24} />
                        </div>
                        <div>
                            <span>Filter</span>
                        </div>
                    </div>
                </div>

                <div className='bottom'>
                    <span>Editing</span>
                </div>
            </div>

            <div className='add-ins'>
                <div>
                    <Table size={36} />
                </div>
                <div className='bottom'>
                    <span>Add-ins</span>
                </div>
            </div>

        </div>
    )
}

export default NavbarBottom