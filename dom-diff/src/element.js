/*
 * @Author: your name
 * @Date: 2021-03-14 21:04:38
 * @LastEditTime: 2021-03-14 21:25:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/dom-diff/src/element.js
 */
class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

function createElement(type, props, children) {
    return new Element(type, props, children);
}

function render(domObj) {
    // 根据 type 类型创建对应元素
    const el = document.createElement(domObj.type);
    // 遍历 props 对象, 给 el 设置属性
    for (let key in domObj.props) {
        setAttr(el, key, domObj.props[key]);
    }

    // 遍历子节点
    // 如果是虚拟 dom 就继续递归
    // 不是就代表是文本节点直接创建
    domObj.children.forEach((child) => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        el.appendChild(child)
    })

    return el;
}

function setAttr(node, key, value) {
    switch (key) {
        case 'value':
            // node 是一个 input 或 textarea 就直接设置其 value 即可
            if (['textarea', 'input'].includes(node.tagName.toLowerCase())) {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

function renderDom(el, target) {
    target.appendChild(el);
}
export {
    Element,
    createElement,
    render,
    setAttr,
    renderDom
}