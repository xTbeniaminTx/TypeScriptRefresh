class Queue<T> {

    private data: T[] = [];

    add(item: T) {
        this.data.push(item)
    }

    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('toto');
nameQueue.add('45');

const numberQueue = new Queue<number>();
numberQueue.add(55)

