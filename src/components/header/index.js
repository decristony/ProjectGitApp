import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled"


const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {

    if (!usernameForSearch) return;
    return getUser(usernameForSearch)
  }

  return (
    <header>
      <S.Wrapper>
        <S.Searchcontainer>
          <input
            type="text"
            className="search-input"
            placeholder="Digite o username para pesquisa"
            onChange={(event) => setUsernameForSearch(event.target.value)}
          ></input>

          <button type="submit" onClick={submitGetUser} >
            <i className="fas fa-search"></i>
          </button>
        </S.Searchcontainer>
      </S.Wrapper>

    </header>

  )

}
export default Header