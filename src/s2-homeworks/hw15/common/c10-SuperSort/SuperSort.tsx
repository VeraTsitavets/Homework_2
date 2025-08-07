
import React from 'react'
import ArrowDown from 'src/assets/Arrow-down.svg'
import ArrowUp from 'src/assets/Arrow-up.svg'
import {Icon} from "../Icon";


// добавить в проект иконки и импортировать
const downIcon = 'ArrowDown'
const upIcon = 'ArrowUp'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //return up // исправить
    if(!sort) return down
    if(sort === down){
        return up
    } else {
        if(sort === up){
            return ''
        } else {
            return down
        }
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
        >
            {
                (!icon || icon === upIcon) &&
                Icon({ iconId: upIcon, width: "8px", height: "5px", viewBox: "0 0 8px 5px", color: icon ? "black" : "#ADABAC" })
            }
            {
                (!icon || icon === downIcon) &&
                Icon({ iconId: downIcon, width: "8px", height: "5px", viewBox: "0 0 8px 5px", color: icon ? "black" : "#ADABAC" })
            }

        </span>
    )
}

export default SuperSort
