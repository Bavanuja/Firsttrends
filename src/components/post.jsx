import React from 'react'

const CommentList = ({ comments }) => (
    <div>
      {comments.map((comment,id) => (
        <div key={id}>
          <strong>{comment.name}:</strong> {comment.text}
        </div>
      ))}
    </div>
  );
export default function Post() {
    let users=[
        {
            id: 1,
            name: "John Doe",
            profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
            postDate: "2024-09-16T08:00:00Z",
            content: "Just went for a morning run, feeling great!",
            likes: 120,
            comments: [
              { name: "Jane Smith", text: "Great job!" },
              { name: "Mike Johnson", text: "Keep it up!" }
            ]
          },
          {
            id: 2,
            name: "Alice Brown",
            profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
            postDate: "2024-09-15T18:30:00Z",
            content: "Had an amazing dinner at the new Italian place in town.",
            likes: 85,
            comments: [
              { name: "Emily Davis", text: "The food is fantastic there!" },
              { name: "Chris Lee", text: "I need to try it soon!" }
            ]
          },
          {
            id: 3,
            name: "David Green",
            profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
            postDate: "2024-09-14T14:45:00Z",
            content: "Exploring the mountains this weekend. Nature is beautiful!",
            likes: 150,
            comments: [
              { name: "Laura White", text: "Wow, looks amazing!" },
              { name: "Robert Brown", text: "Enjoy your trip!" }
            ]
          },
          {
            id: 4,
            name: "Emma Wilson",
            profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
            postDate: "2024-09-13T10:20:00Z",
            content: "Starting a new book today. Can't wait to dive in!",
            likes: 60,
            comments: [
              { name: "Sophia Taylor", text: "Which book is it?" },
              { name: "James Miller", text: "Happy reading!" }
            ]
          },
          {
            id: 5,
            name: "Michael Brown",
            profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
            postDate: "2024-09-12T09:15:00Z",
            content: "Working on a new project. Feeling productive!",
            likes: 200,
            comments: [
              { name: "Olivia Smith", text: "Good luck!" },
              { name: "Noah Martin", text: "You got this!" }
            ]
          },
          {
            id: 6,
            name: "Sarah Johnson",
            profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
            postDate: "2024-09-11T17:05:00Z",
            content: "Had a fantastic workout session today!",
            likes: 95,
            comments: [
              { name: "Ava Anderson", text: "You’re on fire!" },
              {name: "Mason Davis", text: "Keep pushing!" }
            ]
          },
          {
            id: 7,
            name: "Daniel Williams",
            profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
            postDate: "2024-09-10T22:30:00Z",
            content: "Caught a beautiful sunset by the beach.",
            likes: 180,
            comments: [
              { name: "Liam Martinez", text: "Stunning view!" },
              { name: "Ella Garcia",text: "Wish I was there!" }
            ]
          },
          {
            id: 8,
            name: "Olivia Moore",
            profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
            postDate: "2024-09-09T07:55:00Z",
            content: "Baking cookies for the first time, wish me luck!",
            likes: 70,
            comments: [
              { name: "Isabella Thomas", text: "I can smell them already!" },
              { name: "Ethan Lee", text: "Save some for me!" }
            ]
          },
          {
            id: 9,
            name: "James Hall",
            profilePicture: "https://randomuser.me/api/portraits/men/9.jpg",
            postDate: "2024-09-08T13:15:00Z",
            content: "Learning a new programming language. Exciting!",
            likes: 130,
            comments: [
              { name: "Lucas Walker", text: "Which one?" },
              { name: "Mia Young", text: "Good luck!" }
            ]
          },
          {
            id: 10,
            name: "Sophia King",
            profilePicture: "https://randomuser.me/api/portraits/women/10.jpg",
            postDate: "2024-09-07T15:40:00Z",
            content: "Trying my hand at painting. It’s therapeutic!",
            likes: 90,
            comments: [
              { name: "Benjamin Wright", text: "Can't wait to see it!" },
              { name: "Charlotte Hill", text: "Art is always a good idea!" }
            ]
          },
          {
            id: 11,
            name: "Henry Scott",
            profilePicture: "https://randomuser.me/api/portraits/men/11.jpg",
            postDate: "2024-09-06T16:00:00Z",
            content: "Enjoying a peaceful evening with a cup of tea.",
            likes: 60,
            comments: [
              { name: "Victoria Lewis", text: "Sounds relaxing!" },
              { name: "Oliver Harris", text: "Perfect evening!" }
            ]
          },
          {
            id: 12,
            name: "Amelia Robinson",
            profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
            postDate: "2024-09-05T20:10:00Z",
            content: "Had a blast at the concert last night!",
            likes: 110,
            comments: [
              { name: "Alexander Clark", text: "Who performed?" },
              { name: "Lily Rodriguez", text: "So jealous!" }
            ]
          },
          {
            id: 13,
            name: "Samuel Young",
            profilePicture: "https://randomuser.me/api/portraits/men/13.jpg",
            postDate: "2024-09-04T11:30:00Z",
            content: "Visited the new art gallery. So much inspiration!",
            likes: 140,
            comments: [
              {name: "Elijah Martinez", text: "I need to check it out!" },
              {name: "Zoe Turner", text: "Art galleries are the best!" }
            ]
          },
          {
            id: 14,
            name: "Emily Carter",
            profilePicture: "https://randomuser.me/api/portraits/women/14.jpg",
            postDate: "2024-09-03T09:50:00Z",
            content: "Exploring new recipes this week. Any suggestions?",
            likes: 75,
            comments: [
              { name: "Sophie Adams", text: "Try a Thai dish!" },
              { name: "Jack Nguyen", text: "How about lasagna?" }
            ]
          },
          {
            id: 15,
            name: "Thomas Evans",
            profilePicture: "https://randomuser.me/api/portraits/men/15.jpg",
            postDate: "2024-09-02T18:25:00Z",
            content: "Watching a classic movie marathon tonight.",
            likes: 100,
            comments: [
              { name: "Chloe Perez", text: "Sounds like fun!" },
              { name: "Daniel Morgan", text: "What's on your list?" }
            ]
          },
          {
            id: 16,
            name: "Lily Stewart",
            profilePicture: "https://randomuser.me/api/portraits/women/16.jpg",
            postDate: "2024-09-01T07:45:00Z",
            content: "Starting a new workout routine. Let’s do this!",
            likes: 110,
            comments: [
              { name: "Nathan Bell", text: "You've got this!" },
              { name: "Madison Green", text: "Go, Lily!" }
            ]
          },
          {
            id: 17,
            name: "William Nelson",
            profilePicture: "https://randomuser.me/api/portraits/men/17.jpg",
            postDate: "2024-08-31T12:10:00Z",
            content: "Enjoying a quiet day at the park.",
            likes: 55,
            comments: [
              { name: "Scarlett Flores", text: "Lovely!" },
              { name: "Aiden Brooks", text: "Wish I could join!" }
            ]
          },
          {
            id: 18,
            name: "Mia Baker",
            profilePicture: "https://randomuser.me/api/portraits/women/18.jpg",
            postDate: "2024-08-30T19:00:00Z",
            content: "Learning to play the guitar. Challenging but fun!",
            likes: 95,
            comments: [
              { name: "Luna Hernandez", text: "You go, girl!" },
              { name: "Leo Robinson", text: "Let's jam sometime!" }
            ]
          },
          {
            "id": 19,
            "name": "Jackson Perez",
            "profilePicture": "https://randomuser.me/api/portraits/men/19.jpg",
            "postDate": "2024-08-29T10:30:00Z",
            "content": "Weekend hiking trip planned. Can’t wait!",
            "likes": 130,
            comments: [
              {name: "Aurora Evans", text: "Sounds exciting!" },
              { name: "Gabriel Lewis", text: "Stay safe!" }
            ]
          },
          {
            id: 20,
            name: "Grace Collins",
            profilePicture: "https://randomuser.me/api/portraits/women/20.jpg",
            postDate: "2024-08-28T15:50:00Z",
            content: "Decorating my home office. Suggestions welcome!",
            likes: 105,
            comments: [
              { name: "Hazel Scott", text: "Plants always add a nice touch!" },
              { name: "Carter Lee", text: "How about some motivational posters?" }
            ]
          }
    ]
    
  return (
    <div>
      

      <div style={{ padding: "10px", border: "1px solid gray" }}>
        {users.map((item) => (
          <div key={item.id} style={{ border: "1px solid gray", padding: "30px" }}>
            <h4>{item.name}</h4>
            <img src={item.profilePicture} alt={`${item.name}'s profile`} style={{ width: '50px', borderRadius: '50%' }}/>
            <p>
              {item.postDate} 
            </p>
            <p>
                {item.content}
            </p>
            <p>
              Likes:({item.likes}) 
            </p>
            <h5>Comments:</h5>
            <CommentList comments={item.comments} />
          </div>
        ))}
      </div>
    </div>
  )
}
