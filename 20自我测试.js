//1.实现一个双向链表

class Node{
    constructor(data){
        this.data  = data;
        this.pre = null;
        this.next = null;
    }
}


class LinkList{
    constructor(){
        this.head = new Node('head')
    }

    insert(newData,oldData){
        let node = new Node(newData);
        let oldNode = this.find(oldData);
        if(oldNode){
            node.pre = oldNode;
            node.next = oldNode.next;
            oldNode.next = node;
        }
    }

    find(data){
        let current = this.head;
        while(current && current.data != data){
            current = current.next;
        }
        return current;
    }

    remove(data){
        let node = this.find(data);
        if(node){
            node.pre.next = node.next;
            node.next.pre = node.pre;
            node = null;
        }
    }

    display(){
        let current = this.head;
        while(current){
            console,log(current.data);
            current = current.next;
        }
    }
}

//2.实现一个二叉树
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }    
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        let node = new Node(data);
        if(this.root == null){
            this.root = node;
        }else{
           let current = this.root ;  //根节点
           let parent;   //用于保存父节点 

           while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = node;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = node;
                        break;
                    }
                }
           }
        }
    }
    //中序遍历
    inOrder(node){
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

    //前序遍历
    preOrder(){
        console.log(node.data);
        this.inOrder(node.left);
        this.inOrder(node.right);
    }

    //后序遍历
    preOrder(){
        this.inOrder(node.left);
        this.inOrder(node.right);
        console.log(node.data);
    }
}