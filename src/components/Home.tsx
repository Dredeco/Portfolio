import userImg from '../assets/userq.jpg'

export function Home() {
    return (
        <div className="lg:flex lg:flex-row h-screen w-full flex flex-col-reverse relative pt-28 items-center">
            <div className="flex flex-col w-full h-full p-20 lg:items-start justify-center">
                <h1 className="text-5xl">André Fernandes</h1>
                <p className="text-3xl pb-5 text-green-600">Front-end Developer</p>
                <span className="text-xl text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget consectetur arcu, sit amet dapibus diam. Cras pellentesque magna enim, eget mollis lacus tempus eget. Integer ac diam nibh. In non dui suscipit, elementum odio sed, sodales mi. Cras magna augue, congue sit amet elementum sit amet,
                </span>
            </div>

            <div className="flex w-full justify-center items-center pt-5 px-20">
                <img src={userImg} className="relative border h-auto w-[50%] lg:w-auto rounded-full lg:rounded-none" />
            </div>
        </div>
    )
}