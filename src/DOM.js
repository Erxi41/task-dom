/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; count--) {
        const tag_ = document.createElement(tag);
        const text = document.createTextNode(content); // создали текстовый-узел
        tag_.append(text);
        document.body.append(tag_);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function add_in_tree(count, step) {
        let root = document.createElement('div');
        root.classList.add(`item_${step}`);
        if (step < level) {
            for (let i = 0; i < count; i++) {
                root.append(add_in_tree(childrenCount, step + 1));
            }
        }
        return root;
    }

    return add_in_tree(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);

    tree.childNodes.forEach((el) => {
        if (el.className == 'item_2') {
            let childs = el.childNodes;
            let replacement = document.createElement('section');
            replacement.classList.add('item_2');
            Array.from(childs).forEach((elem) => {
                replacement.append(elem);
            });
            el.replaceWith(replacement);
        }
    });

    return tree;
}
