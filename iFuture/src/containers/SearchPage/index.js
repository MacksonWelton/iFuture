import React from 'react'
import { connect } from 'react-redux'
import { setInputSearch } from '../../actions/search'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'

import Appbar from '../../components/Appbar'
import CardRestaurant from '../../components/CardRestaurant'

function SearchPage(props) {

    const { inputSearch, setInputSearch, restaurants } = props

    const handleInputSearchChange = (e) => {
        setInputSearch(e.target.value)
    }

    const restaurantsFiltered = restaurants.filter(restaurant => restaurant.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))

    return (
        <S.SearchPageWrapper>
            <Appbar page='search' />

            <S.Container>
                <TextField
                    value={inputSearch}
                    onChange={handleInputSearchChange}
                    fullWidth
                    variant='outlined'
                    placeholder='Restaurante'
                    InputProps={{
                        startAdornment: (<InputAdornment position="start">
                                <img src={require("../../assets/search.svg")} alt='Voltar' />
                            </InputAdornment>),
                    }}
                />

                {inputSearch === ''

                    ? <S.CenteredContent>
                        <S.MessageSearch>
                            Busque por nome de restaurante
                        </S.MessageSearch>
                    </S.CenteredContent>

                    : restaurantsFiltered.length === 0

                        ? <S.CenteredContent>
                            <S.MessageSearch>
                                Não encontramos :(
                            </S.MessageSearch>
                        </S.CenteredContent>

                        : <S.SearchWrapper>
                            {restaurantsFiltered.map(restaurant => (
                                <CardRestaurant key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </S.SearchWrapper>
                }

            </S.Container>
        </S.SearchPageWrapper>

    )
}

const mapStateToProps = (state) => ({
    inputSearch: state.search.inputSearch,
    restaurants: state.food.restaurantsList
})

const mapDispatchToProps = dispatch => ({
    setInputSearch: (inputContent) => dispatch(setInputSearch(inputContent))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
