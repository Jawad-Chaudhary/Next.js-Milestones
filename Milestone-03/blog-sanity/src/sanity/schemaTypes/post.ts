import { defineType,defineField,defineArrayMember } from "sanity" // TO get intellicence from sanity

export default  defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: Rule => Rule.required(),
    }),

    //slug fields/schema type

    defineField({
      title: "Slug",
      name: 'slug',
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"summary",
      type: "text",
      title: "Summary",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Optional: Enables image cropping
      },
    }
    
    ),
    defineField({
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        })
      ]
    }),
    defineField({
      title: "Author",
      description: "Enter author name of the blog.",
      name: "author",
      type: "reference",
      to: [
        {type: "author"},
      ]
    }),

    // {
    //   name: "gender",
    //   type: "string",
    //   title: "Gender",
    //   options:{
    //     list:[
    //       {title:"Male",value:"male"},
    //       {title:"Female",value:"female"}
    //     ],
    //     layout: "radio",
    //     direction:"horizontal",
    //     validation: Rule => Rule.required(),
    //   }
    // }
  ]
})