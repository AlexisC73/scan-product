import React, {useState} from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import {Search} from './Icon'

export default function Header () {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")
    const [formMobileVisible, setFormMobileVisible] = useState(false)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/product/" + searchInput)
        setSearchInput("")
        setFormMobileVisible(false)
    }
    const handleToggleMobileSearch = () => {
        setFormMobileVisible(!formMobileVisible)
    }
    return <><header>
            <h1>{t('name')}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"><Search /></label>
                <input type={"text"} onChange={handleInputChange} name="search" id="search" placeholder={t('searchMessage')} value={searchInput} />
            </form>
            <Search onClick={handleToggleMobileSearch} className="search-mobile" />
        </header>
        {formMobileVisible && <form className="mobile-form" onSubmit={handleSubmit}>
                <input type={"text"} onChange={handleInputChange} name="search" id="search" placeholder={t('searchMessage')} value={searchInput} />
        </form>}
        </>
}