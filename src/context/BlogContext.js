import createDataContext from './createDataContext';



const blogReducer=(state,action)=>{
    switch(action.type){
        case 'edit_post':
            return state.map(blogPost=>{
                return blogPost.id===action.payload.id?action.payload:blogPost;
            });
        case 'delete_post':
            return state.filter(blogPost=>blogPost.id !==action.payload);
        case 'add_post':
            return[...state, 
                {id:Math.floor(Math.random()*9999), 
                title: action.payload.title,
                content: action.payload.content}
            ];
        default:
            return state;
    }
};

const addBlogPost=dispach=>{
    return(title,content,callback)=>{
        dispach({type:'add_post',payload:{title,content}});
        callback();
    }
};

const deleteBlogPost=dispach=>{
    return(id)=>{
        dispach({type:'delete_post',payload:id});
    }
};

const editBlogPost=dispach=>{
    return(id,title,content,callback)=>{
        dispach(
            {type:'edit_post',payload:{id,title,content}
            });
        if(callback){
            callback();
        }
    }
    
};

export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost},[
    {title:'Post test',content:'Content test', id:1}
]);
