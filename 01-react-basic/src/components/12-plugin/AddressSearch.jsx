import React, { useState } from 'react'
import KakaoPostcodeEmbed, { DaumPostcodeEmbed } from 'react-daum-postcode';

export const AddressSearch = () => {
    // 1. 상태변수
    // 우편번호를 저장할 변수
    let [zoneCode, setZoneCode] = useState("");

    // 주소를 저장할 변수
    let [address, setAddress] = useState("");
    // 우편번호를 검색할 팝업을 체크할 변수
    let [opne, setOpen] = useState(false);

    // 2. 메서드
    // 우편번호 검색이 끝나고 우편번호, 주소를 변경해줄 
    const handleComplte = (data) => {
        console, log("검색결과", data);
        setZoneCode(data.zonecode);
        setAddress(data.address);
        setOpen(false)
    }

    // 3. 화면에 붙일 내용
    return (
        <div className='relative'>
            <h2>주소 검색</h2>
            <div>
                <input type="text" placeholder='우편번호' value={zoneCode}
                    className='border' />
                <button onClick={() => setOpen(true)}>우편번호 검색</button>
            </div>
            <div><input type="text" placeholder='주소' value={address}
                className='border' readOnly /></div>

            {opne && (
                <div className='absolute left-0 bottom-20 bg-white border-2 z-100'>
                    {/* <DaumPostcodeEmbed onComplete={handleComplte} /> */}
                    <KakaoPostcodeEmbed onComplete={handleComplte} />
                </div>
            )}
        </div>
    )
}
