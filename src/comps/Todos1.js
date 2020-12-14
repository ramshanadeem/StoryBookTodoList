import React from 'react'
import { useTransition, animated } from 'react-spring'

function Todos1({ todolist }) {


    const transitions = useTransition(todolist, todolist => todolist.id, {
        from: { marginLeft: - 500 },
        enter: { marginLeft: 0 }
    })

    return (
        <>
            {
                transitions.map(
                    ({ item, props, key }) =>
                        <animated.div key={key} style={props}>{item.title}</animated.div>
                )}
            {/*   <ul >
                {todolist.map(
                    (item) => (
                        <p style={{ textDecoration: "none", textAlign: "center" }} key={item.id}>{item.title}</p>
                    )
                )}
            </ul> */}
        </>
    )
}

export default Todos1
