import tutorial1Content from './gemicai_tutorial_1.pynbhtml';
import tutorial2Content from './gemicai_tutorial_2.pynbhtml';
import tutorial3Content from './gemicai_tutorial_3.pynbhtml';
import tutorial4Content from './gemicai_tutorial_4.pynbhtml';
import tutorial5Content from './gemicai_tutorial_5.pynbhtml';

export default [
    {
        id: 1,
        title: "Intro to Gemicai",
        sections: [
            {name: "Preliminaries", anchor: "1.0-Preliminaries"},
            {name: "Datasets", anchor: "1.1-Datasets"},
            {name: "Classifiers", anchor: "1.2-Classifiers"},
            {name: "Saving and loading a classifier", anchor: "1.3-Saving-and-loading-a-classifier"},
            {name: "Hyper parameter optimisation", anchor: "1.4-Hyper-parameter-optimisation"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_1.ipynb",
        contents: tutorial1Content
    }, {
        id: 2,
        title: "From data pre-processing to model evaluation",
        sections: [
            {name: "Preliminaries", anchor: "2.0-Preliminaries"},
            {name: "Data preproccessing", anchor: "2.1-Data-preproccessing"},
            {name: "Classifier initialization", anchor: "2.2-Classifier-initialization"},
            {name: "Hyper parameter optimisation", anchor: "2.3-Hyper-parameter-optimisation"},
            {name: "Model evaluation", anchor: "2.4-Model-evaluation"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_2.ipynb",
        contents: tutorial2Content
    }, {
        id: 3,
        title: "Gemicai Dataset",
        sections: [
            {name: "Create gemset", anchor: "3.1-Create-gemset"},
            {name: "Tweaking gemset", anchor: "3.2-Tweaking-gemset"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_3.ipynb",
        contents: tutorial3Content
    }, {
        id: 4,
        title: "ClassifierTree",
        sections: [
            {name: "Creating the tree", anchor: "4.1-Creating-the-tree"},
            {name: "Training the tree", anchor: "4.2-Training-the-tree"},
            {name: "Evaluating the tree", anchor: "4.3-Evaluating-the-tree"},
            {name: "Saving and retrieving the tree", anchor: "4.4-Saving-and-retrieving-the-tree"},
            {name: "Classifying with the tree", anchor: "4.5-Classifying-with-the-tree"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_4.ipynb",
        contents: tutorial4Content
    }, {
        id: 5,
        title: "ClassifierTree: Advanced",
        sections: [
            {name: "Recap", anchor: "5.1-Recap"},
            {name: "Tweaking individual nodes in the tree", anchor: "5.2-Tweaking-individual-nodes-in-the-tree"},
            {name: "Additional techniques for improved performance", anchor: "5.3-Additional-techniques-for-improved-performance"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_5.ipynb",
        contents: tutorial5Content
    },
];
