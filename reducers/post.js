export const initialState = {
    mainPosts: [{
        User: {
            id:1,
            nickname: '세인',
        },
        context: '첫 번째 게시글',
        img: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg'
    }],
    imagePaths: [],
};

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '세인',
        },
    },
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer;