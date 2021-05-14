import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    LineShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";

const LinkGenerator = () => {
    const [inputLink, setInputLink] = useState('')
    const [guestName, setGuestName] = useState('')
    const [generatedLink, setGeneratedLink] = useState('')

    const handleChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'guestName') {
            setGuestName(e.target.value.trim())
        } else {
            setInputLink(e.target.value.trim())
        }
    }

    const generateLink = () => {
        console.log('this')
        setGeneratedLink(inputLink + `?name=${guestName}`)
    }

    return (
        <div className="flex justify-center h-screen">
            <div className="w-full max-w-sm m-auto" >
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Wedding Link</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="inputLink" onChange={handleChange}></input>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Guest Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="guestName" onChange={handleChange}></input>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={generateLink}>
                            Generate Link</button>
                    </div>
                </div>
                {generatedLink ? (
                    <div className="flex flex-wrap md:items-center mt-2 ">
                        <div className="bg-gray-200 w-5/6 self-center p-2">
                            {generatedLink}
                        </div>
                        <div className="w-1/6">
                            <CopyToClipboard text={generatedLink}>
                                <button>
                                    <span style={{
                                        fontFamily: 'Material Icons', fontSize: '24px'
                                    }}>content_copy</span>

                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className="p-1 mt-4 w-full">
                            <WhatsappShareButton
                                url={''}
                                title={'hello world'}
                                separator=":: "
                                className=""
                            >
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </div>

                    </div>
                ) : ''}
            </div>
        </div>
    )
}
export default LinkGenerator